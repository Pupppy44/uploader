<p align="center"> <img width="170" height="170" src="https://img.icons8.com/fluency-systems-filled/96/FA5252/fast-download.png" alt="fast-download"/>
</p>

# uploader - File Uploading System

`uploader` is a website where you can upload multiple files and send them from one device to another. This is useful for backing up files from an old device, such as an old phone or computer.

`uploader` has two sides: the server and client. The server is written using JavaScript, and it's hosted on the device that's receiving the files. The client is one HTML page, `index.html`, that allows you to upload files from another device and send them over to the server. You can customize which folder the uploaded files go.

## Features

- Supports uploading hundreds of files at once
- Easy-to-use uploading website with a progress bar
- Quick and simple to setup on any computer

## Usage

To use `uploader`, make sure you have Node.JS installed. After you've checked that, run `node index.js`. This will start the server at port **3000**. You can change the port in `index.js`.

After that, the client can access your server at the current port to view the upload page and start sending!
