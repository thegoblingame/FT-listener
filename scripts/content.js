function cleanString(str) {
  // Remove emojis and other special characters, and convert to lower case
  const cleanedString = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase();
  console.log(cleanedString);
}
  
// Function to initialize the MutationObserver on a single node
function initObserver(targetNode, targetedChats, notificationSound) {
  // console.log('inits');
  // const config = { characterData: true };
  const config = { attributes: true, childList: true, characterData: true, subtree: true };


  const observer = new MutationObserver((mutations) => {
    console.log('observed something');
    console.log(mutations);
    const changedText = targetNode.textContent || "";
    const cleanedUsername = cleanString(changedText.split(":")[0].trim());
    // console.log(targetedChats,cleanedUsername);
    if (targetedChats.includes(cleanedUsername)) {
      // Play the audio
      // notificationSound.play();
      console.log(notificationSound);
    }
});

  // Start observing the target node
  observer.observe(targetNode, config);
}
  
  // Function to initialize observers based on array of nodes
  function initializeObservers(nodesToObserve, targetedChats) {
    // const notificationSound = new Audio('your-audio-file.mp3'); // Replace with the path to your audio file
    const notificationSound = 'hi';
    console.log(nodesToObserve);
    for (const node of nodesToObserve) {
      initObserver(node, targetedChats, notificationSound);
    }
  }
  
  // Initialize

  // grab the nodes of all chatrooms
  const nodesToObserve = document.querySelectorAll('div[id="initial-message"], div[id="realtime-message"]');

  // List of chats/users you want to watch for notifications
  const targetedChats = ['goblin', 'scizr','flippen.eth', 'scizr','Guru']; 

  initializeObservers(nodesToObserve, targetedChats);
  