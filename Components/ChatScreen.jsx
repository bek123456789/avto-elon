import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';

const ChatScreen = () => {
  const [users, setUsers] = useState([]); // List of users fetched from API
  const [selectedUser, setSelectedUser] = useState(null); // Selected receiver
  const [message, setMessage] = useState(''); // Message text
  const [loggedInUser, setLoggedInUser] = useState(null); // Logged-in user from API
  const [isLoading, setIsLoading] = useState(false); // Loading state for API calls
  const [messages, setMessages] = useState([]); // Messages between users

  // Fetch logged-in user details
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch('https://avto-elon-node.onrender.com/api/users'); // Adjust endpoint if needed
        if (!response.ok) {
          throw new Error('Failed to fetch logged-in user');
        }
        const user = await response.json();
        setLoggedInUser(user); // Set logged-in user from the API
      } catch (error) {
        console.error('Error fetching logged-in user:', error);
        Alert.alert('Error', 'Failed to load user details.');
      }
    };

    fetchLoggedInUser();
  }, []);

  useEffect(() => {
    if (!loggedInUser) return;

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://avto-elon-node.onrender.com/api/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const result = await response.json();
        setUsers(result.filter((user) => user.name !== loggedInUser.name)); // Exclude logged-in user from the list
      } catch (error) {
        console.error('Error fetching users:', error);
        Alert.alert('Error', 'Failed to load users.');
      }
    };

    fetchUsers();
  }, [loggedInUser]);

  const fetchMessages = async (receiver) => {
    // Fetch messages between the logged-in user and selected receiver
    setIsLoading(true);
    try {
      const response = await fetch(`https://avto-elon-node.onrender.com/api/messages`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const allMessages = await response.json();
      const filteredMessages = allMessages.filter(
        (msg) =>
          (msg.sender === loggedInUser.name && msg.receiver === receiver.name) ||
          (msg.sender === receiver.name && msg.receiver === loggedInUser.name)
      );
      setMessages(filteredMessages);
    } catch (error) {
      console.error('Error fetching messages:', error);
      Alert.alert('Error', 'Failed to load messages.');
    } finally {
      setIsLoading(false);
    }
  };

  const postMessage = async () => {
    if (!message.trim()) {
      Alert.alert('Validation', 'Message cannot be empty!');
      return;
    }
    if (!selectedUser) {
      Alert.alert('Validation', 'Please select a user to send the message.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://avto-elon-node.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender: loggedInUser.name,
          receiver: selectedUser.name,
          text: message,
          status: 'neprichitano',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setMessages((prevMessages) => [...prevMessages, result]); // Append the new message to the list
      setMessage(''); // Clear the input field
    } catch (error) {
      console.error('Error posting message:', error);
      Alert.alert('Error', 'Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const selectUser = (user) => {
    setSelectedUser(user);
    fetchMessages(user); // Fetch messages with the selected user
  };

  if (!loggedInUser) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading user details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat Application</Text>
      <Text style={styles.loggedInUser}>Logged in as: {loggedInUser.name}</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.userItem, selectedUser?._id === item._id && styles.selectedUser]}
            onPress={() => selectUser(item)}
          >
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        contentContainerStyle={styles.userList}
      />
      {selectedUser && (
        <>
          <Text style={styles.chatHeader}>Chat with {selectedUser.name}</Text>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={messages}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View style={[styles.messageItem, item.sender === loggedInUser.name ? styles.myMessage : styles.theirMessage]}>
                  <Text style={styles.messageText}>{item.text}</Text>
                </View>
              )}
              style={styles.messagesList}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Type your message here"
            value={message}
            onChangeText={setMessage}
            editable={!isLoading} // Disable input while loading
          />
          <Button title={isLoading ? 'Sending...' : 'Send'} onPress={postMessage} disabled={isLoading} />
        </>
      )}
      {!selectedUser && <Text style={styles.noUserText}>Please select a user to start chatting.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  loggedInUser: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'center',
    color: '#555',
  },
  userList: {
    paddingBottom: 16,
  },
  userItem: {
    padding: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  selectedUser: {
    backgroundColor: '#ddd',
  },
  userName: {
    fontSize: 16,
  },
  chatHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  messagesList: {
    flex: 1,
    marginBottom: 16,
  },
  messageItem: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 4,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1f7c4',
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  messageText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  noUserText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});

export default ChatScreen;
