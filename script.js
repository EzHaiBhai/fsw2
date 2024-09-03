const copyToClipboard = async () => {
    try {
        const element = document.querySelector(".user-select-all");
        await navigator.clipboard.writeText(element.textContent);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const copyEVENT = async () => {
    try {
        await navigator.clipboard.writeText(EVENT);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const rmi = async () => {
    try {
        await navigator.clipboard.writeText(RMI);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const jfx3d = async () => {
    try {
        await navigator.clipboard.writeText(JFX3d);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const jfx2d = async () => {
    try {
        await navigator.clipboard.writeText(JFX2d);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const socket = async () => {
    try {
        await navigator.clipboard.writeText(SOCKET);
    } catch (error) {
        console.error("Failed to copy to clipboard:", error);
    }
};

const SOCKET = `
public class Server {
    public static void main(String[] args){
        try {
            ServerSocket ss = new ServerSocket(6666);
            Socket s = ss.accept();
            DataInputStream dis = new DataInputStream(s.getInputStream());
            String str = (String) dis.readUTF();

            System.out.println("msg : " + str);
            ss.close()

        }
        catch (Exception e){
            e.printStackTrace();
        }

    }
}


public class Client{
    public static void main(String[] args){
        try {
            Socket s = new Socket("localhost",6666);
            DataOutputStream dos = new DataOutputStream(s.getOutputStream());

            dos.writeUTF("Hello");
            dos.flush();

            dos.close();
        }
        catch (Exception e){
            e.printStackTrace();
        }
    }
}

`;



const JFX2d = `
package com.example.demo1;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.shape.Circle;
import javafx.scene.shape.Ellipse;
import javafx.scene.shape.Rectangle;
import javafx.scene.text.Font;
import javafx.scene.text.TextAlignment;
import javafx.stage.Stage;
import javafx.scene.text.Text;


import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage stage) throws IOException {
        Pane obj = new Pane();
        //Create a Text
        Text text = new Text();

        text.setFont(new Font(40));
        text.setWrappingWidth(200);
        text.setTextAlignment(TextAlignment.JUSTIFY);
        text.setText("Shapes");

        text.setX(200);
        text.setY(60);


        //Create a Circle
        Circle circle = new Circle();
        circle.setCenterX(100);
        circle.setCenterY(100);
        circle.setRadius(50);
        circle.setFill(Color.BLUE);

        //Rectangle
        Rectangle rectangle = new Rectangle();
        rectangle.setX(200);
        rectangle.setY(200);
        rectangle.setWidth(100);
        rectangle.setHeight(100);
        rectangle.setFill(Color.RED);

        //Ellipse
        Ellipse ellipse = new Ellipse();
        ellipse.setCenterX(400);
        ellipse.setCenterY(100);
        ellipse.setRadiusX(80);
        ellipse.setRadiusY(50);
        ellipse.setFill(Color.GREEN);

        obj.getChildren().addAll(text,circle,rectangle,ellipse);

        Scene scene = new Scene(obj, 600, 400);
        stage.setTitle("Hello!");
        stage.setScene(scene);
        stage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}
`;

const JFX3d = `

package com.example.drawmodel;

import javafx.application.Application;
import javafx.scene.Group;
import javafx.scene.PerspectiveCamera;
import javafx.scene.Scene;
import javafx.scene.shape.Box;
import javafx.scene.shape.DrawMode;
import javafx.stage.Stage;

import java.io.IOException;

public class HelloApplication extends Application {
    @Override
    public void start(Stage primaryStage) throws IOException {

        Box box1 = new Box();
        Box box2 = new Box();

        box2.setTranslateX(450);
        box2.setTranslateY(300);
        box2.setTranslateZ(100);
        box2.setHeight(150);
        box2.setWidth(50);
        box2.setDepth(400);

        box1.setHeight(100);
        box1.setWidth(100);
        box1.setDepth(400);
        box1.setTranslateX(200);
        box1.setTranslateY(200);
        box1.setTranslateZ(200);

        box1.setDrawMode(DrawMode.FILL);
        box2.setDrawMode(DrawMode.LINE);

        PerspectiveCamera camera = new PerspectiveCamera();
        camera.setTranslateX(100);
        camera.setTranslateY(100);
        camera.setTranslateZ(50);

        Group root = new Group();
        root.getChildren().addAll(box1,box2);
        Scene scene = new Scene(root,450,350);
        scene.setCamera(camera);
        primaryStage.setScene(scene);
        primaryStage.setTitle("Setting DrawMode");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch();
    }
}

  `;

const RMI = `
import java.rmi.Naming;

public class MyClient {
    public static void main(String[] args) {
        try {
            MyRemote remoteObject = (MyRemote) Naming.lookup("rmi://localhost:1099/MyRemote");
            String response = remoteObject.sayHello();
            System.out.println("Response from server: " + response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface MyRemote extends Remote {
    String sayHello() throws RemoteException;
}

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class MyRemoteImpl extends UnicastRemoteObject implements MyRemote {
    protected MyRemoteImpl() throws RemoteException {
        super();
    }

    @Override
    public String sayHello() throws RemoteException {
        return "Hello, world!";
    }
}

import java.rmi.Naming;
import java.rmi.registry.LocateRegistry;

public class MyServer {
    public static void main(String[] args) {
        try {
            LocateRegistry.createRegistry(1099); // Start RMI registry on port 1099
            MyRemoteImpl remoteObject = new MyRemoteImpl();
            Naming.rebind("rmi://localhost:1099/MyRemote", remoteObject);
            System.out.println("Server is ready.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}


`;




const EVENT = `
/ Import events module 
var events = require('events'); 
// Create an eventEmitter object 
var eventEmitter = new events.EventEmitter(); 
 
// Create an event handler as follows 
var connectHandler = function connected() { 
  console.log('connection succesful.'); 
 
 // Fire the data_received event 
  eventEmitter.emit('data_received'); 
} 
 
// Bind the connection event with the handler 
eventEmitter.on('connection', connectHandler); 
// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received', function(){ 
 console.log('data received succesfully.'); 
}); 
// Fire the connection event 
eventEmitter.emit('connection'); 
console.log("Program Ended."); 
`;
