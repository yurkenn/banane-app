import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import FloatingButton from '../../components/FloatingButton';
import style from './Messages.style';
import ContentInputModal from '../../components/modal/ContentInputModal';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard';
const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const handleInputToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      data: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObj);
  };

  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handleBanane(item)} />
  );

  const handleBanane = item => {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  };

  return (
    <View style={style.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="add" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};

export default Messages;
