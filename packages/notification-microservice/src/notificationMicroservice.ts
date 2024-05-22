interface Notification {
    id: number;
    message: string;
  }
  
  function sendNotification(userId: number, message: string): Notification {
    // Example notification sending logic
    const id = Math.floor(Math.random() * 1000) + 1;
    return { id, message };
  }
  
  export { sendNotification };