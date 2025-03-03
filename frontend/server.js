import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000", // Cho phép client Next.js kết nối
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("📡 New client connected:", socket.id);
    // Lắng nghe tin nhắn từ client
    socket.on("message", (msg) => {
        console.log(`📩 Received: ${msg}`);
        io.emit("message", msg); // Gửi tin nhắn đến tất cả client
      });
  
      socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
      });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});