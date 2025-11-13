function leerTodosLosNoLeidos() {
  let start = 0;
  const batchSize = 500;

  while (true) {
    const threads = GmailApp.search("is:unread", start, batchSize);

    if (threads.length === 0) break;

    threads.forEach(thread => {
      thread.getMessages().forEach(msg => {
        if (msg.isUnread()) {
          Logger.log("De: " + msg.getFrom());
        }
      });

      thread.markRead();
    });

    start += batchSize;
  }

  Logger.log("Listo.");
}
