// import { Server as HTTPServer } from "http";
// import { Server as SocketIOServer } from "socket.io";

// let io: SocketIOServer | null = null;

// export function initSocket(server: HTTPServer) {
//   console.log("tests");
  
//   if (!io) {
//     io = new SocketIOServer(server, {
//       path: "/api/socket",
//       cors: {
//         origin: "*",
//         methods: ["GET", "POST"],
//       },
//     });

//     io.on("connection", (socket) => {
//       console.log("User connected:", socket.id);

//       socket.on("message", (msg) => {
//         console.log("Message received:", msg);
//         io?.emit("message", msg); // Broadcast tin nhắn đến mọi người
//       });

//       socket.on("disconnect", () => {
//         console.log("User disconnected:", socket.id);
//       });
//     });
//   }
// }

// export function getIo(): SocketIOServer {
//   if (!io) throw new Error("Socket.io chưa được khởi tạo!");
//   return io;
// }
