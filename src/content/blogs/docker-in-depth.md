---
title: "Docker In Depth: The Complete Guide to Containerized Development"
slug: "docker-in-depth"
banner: "/projects/dockerbanner.png"
author: "Aman Pandey"
authorImage: "/projects/myimg.jpg" 
date: "June 15, 2025"
summary: "Docker has revolutionized the way we build, deploy, and scale applications. In this comprehensive blog, we’ll take a deep dive into Docker from understanding the fundamentals of containerization to mastering advanced concepts like Docker Compose, Docker Swarm, Volume and networking."
tags: ["Docker", "Containers"]
---

<img src="/projects/dockerbanner.png" alt="Redux Toolkit" style="margin-bottom: 28px;" />

Docker is a powerful platform designed to simplify the process of building, sharing, and running applications inside containers. A container is a lightweight, standalone environment that includes everything an application needs its code, libraries, and its all the dependencies so it runs reliably no matter where it's deployed.

In this blog, we’ll guide you through everything from installing Docker to mastering its core concepts, supported by hands-on examples and practical use cases.

### Table of Contents

1. [Getting Started With Docker](#getting-started-with-docker)  
2. [Basics of Docker with Demo](#basics-of-docker-with-demo)
3. [Docker Vs Virtual Machine](#docker-vs-virtual-machine)  
4. [Docker Commands with Example](#docker-commands-with-example)  
5. [Docker Network Concept and Demo](#docker-network-concept-and-demo)  
6. [Dockerfile – Building Our Own Docker Image](#dockerfile---building-our-own-docker-image)  
7. [Private Docker Repository – Pushing Our Built Docker Image into a Private Registry on AWS](#private-docker-repository---pushing-our-built-docker-image-into-a-private-registry-on-aws)  
8. [Docker Compose – Running Multiple Services](#docker-compose---running-multiple-services)  
9. [Docker Volumes – Persist Data in Docker](#docker-volumes---persist-data-in-docker)

## Getting Started With Docker

Docker is available in two main variants: **Docker Engine** and **Docker Desktop**. The Docker Engine is primarily used on Linux systems and includes the core daemon (dockerd) and the Docker CLI for interacting with it. Docker Desktop, on the other hand, provides a complete Docker environment for Windows, macOS, and even Linux by leveraging virtualization. It offers a graphical dashboard for managing containers alongside the standard Docker CLI.

If you’re using Windows or macOS, visit the official [Docker installation guide](https://docs.docker.com/get-started/get-docker) and install docker desktop, download the version suited for your operating system, run the installer, and launch Docker Desktop from your applications. Once it's running, you can open a terminal and start using Docker commands.

### Installing Docker on Fedora Linux

You can install Docker on fedora linux in different ways, depending on your needs:

- You can set up **Docker's repositories** and install from them, for ease of installation and upgrade tasks. This is the recommended approach.

- You can download the **RPM package**, install it manually, and manage upgrades completely manually. So lets start with first way. 

Follow these quick steps to install Docker Engine on your Fedora system using the official Docker repository:

#### Step 1: Set Up the Repository

Install the dnf-plugins-core package (which provides the commands to manage your DNF repositories) and set up the repository.

```bash
$ sudo dnf -y install dnf-plugins-core
$ sudo dnf-3 config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
```

#### Step 2: Install Docker Engine

Now install Docker Engine, CLI tools, and related plugins:

```bash
$ sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Complete the installation by adding yourself to the docker group. This allows you to run docker CLI commands without using sudo.

```bash
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```

#### Step 3: Start and Enable Docker

```bash
$ sudo systemctl start docker
$ sudo systemctl enable docker
```
You can now verify Docker is running: 
```bash
$ docker --version
```

### Check Docker Working?

Once you’ve installed Docker, you can check it’s working by starting a basic container. The hello-world image on Docker Hub is a good choice. Always remember one thing i.e if you write **docker pull hello-world** in terminal then it only pull image from Docker Hub and not run container from that image. Hence if u want to run container too so please consider **docker run** which will do both pull and run simultaneously. 

Run the following command to start a container with the image:

```bash
$ docker run hello-world:latest  # latest is the default tag, you can add specific version  
```
if you see this output then your docker installation is ready to use.

```bash
[amanpandey@aman-fedora ~]$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
e6590344b1a5: Pull complete 
Digest: sha256:940c619fbd418f9b2b1b63e25d8861f9cc1b46e3fc8b018ccfe8b78f19b8cc4f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```
As u see above then first few lines show the Docker daemon recognizing that you’ve never used the hello-world image before, so it has to download it from Docker Hub.

## Basics of Docker with Demo

Before You Start Using Docker, its very essential to know about:

- **Image:** All container start from image, The image defines the initial state of the container’s filesystem. Prebuilt images are available in public repositories such as Docker Hub.

- **Containers:** Container is an instance of an image. A way to package application with all the necessary dependencies and configuration. it's Portable artifact, easily shared and moved around. Makes development and deployment more efficient.

In a programming languages example java, if u know about class and object then u may relate easily with image and container. 

## Docker Vs Virtual Machine

<img src="/projects/docker.png" alt="docker" style="margin-bottom: 28px;" />

The key difference between containers and virtual machines is that virtual machines virtualize an entire machine down to the hardware layers and containers only virtualize applicaation layer above the operating system level.

This Virtualization is the reason of below points:

- **Size** - Docker Image is much Smaller.
- **Docker** - Containers start and run much fast.
- **Compatibility** - VM of any OS can run on any OS host. 

One of the key strengths of Virtual Machines (VMs) is their cross-platform compatibility. This works because the hypervisor creates a virtual hardware layer that abstracts away the underlying host OS. This allows the guest OS to operate as if it’s running on its native hardware, regardless of the actual host system. meanwhile Docker does not use a traditional hypervisor. Instead, it relies on OS-level virtualization, Docker uses the host machine's OS kernel directly to run containers.