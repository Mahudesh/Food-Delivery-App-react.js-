# COMMANDS FOR CLOUD MANAGEMENT


> INSTANCE CREATION FOR Ipv4 Connection(it works) in "USER DETAILS OPTIONAL" not in cmd for LINUX:  


#!/bin/bash

yum update -y

yum install httpd -y

systemctl enable httpd

systemctl start httpd










>FOR CONNECTING EC2 INSTANCE LINUX & RUN IN NATIVE WINDOWS CMD AND HOSTING A STATIC WEBSITE USING EC2 :


sudo ssh -i 119_kesav_Insatance_Key.pem ec2-user@65.0.180.42 {FOR CONNECTION}
sudo yum install git -y
cd /tmp
cd myproject
git clone projectlink
cd {project name}
pwd - to print working directory
sudo cp -R /tmp/myproject/octanet/* /var/www/html/









>COMMANDS FOR INSTALLING DOCKER ON EC2 INSTANCE TERMINAL FOR LINUX: 


sudo su
yum install docker -y
docker --version
systemctl start docker
mkdir Dockerproject
ls
cd Dockerproject/
docker run hello-world










>COMMANDS FOR PULLING NGINX & RUNNING IT FROM DOCKER HUB :



docker pull nginx                                     {nginx - docker image name}[docker pull imagename]

docker images                                         [displays docker images]

docker ps -a                                          [displayes all running containers]

systemctl start httpd                                 [to start httpd]

systemctl stop httpd                                  {incase httpd is running, stop it to run the docker}

docker run -d -p 80:80 nginx                          [-d is detach  ,  -p is flag  ,  80 is EC2 port , 80 is container port]

docker ps                                             [ docker process status that gives all running containers] 

docker stop containername                             [ to stop the docker]

docker run --name containername -d -p 80:80 nginx     [to rename docker container] 





nano Dockerfile                                       [Opens scriptfile where we can write messages from alphine]

INSIDE DOCKERFILE :

FROM alpine:latest
CMD ["echo","This is Kesav's image"]

      i) Press CTRL O to write the lines into the file
     ii) Press Enter to save it
    iii) Press CTRL X to exit from the script






docker build -t imgname:imgtag .                      [to build written script msg in the Dockerfile]

docker run imgname:imgtag                             [to run the dockerfile using imgname & imgtag]      













> COMMANDS FOR PULLING HTTPD(APACHE) & RUNNING IT FROM DOCKER HUB :



docker pull httpd

docker images

docker run --name containername -d -p 80:80 httpd

docker run -p 80:80 httpd                                          [without -d we can see refreshing status of the page, msg appears when each time the pg is reloaded] 










> COMMANDS TO STOP & REMOVE RUNNING CONTAINERS IN DOCKER :

docker stop containername                               [stops respective container]

docker stop $(docker ps -aq)                            [stops all running containers]

docker rm $(docker ps -aq)                              [removes all containers]

docker rmi imagename      












> COMMANDS FOR PULLING UBUNTU & RUNNING IT FROM DOCKER HUB :

docker pull ubuntu:latest

docker images

docker run -it ubuntu











> COMMANDS TO INSTALL PING IN UBUNTU :


apt-get update                               [gets the ubuntu security & packages]

apt install iputils-ping                     [to install the ping]

ping google.com                              [displays all the pings of google in a loop]











> COMMANDS TO CREATE NEW DOCKER VOLUME IN A CONTAINER & DISPLAY THE MOUNTED PATH :


docker volume create volumename                                       [to create new vol]

docker volume ls                                                      [to display created vols]

docker run -d -p 80:80 --name containername -v volumename:/usr/share/nginx/html nginx      [to run vol attached to container with nginx default path]

docker ps                                                             [displays running containers]

docker inspect containername                                          [to inspect the container]

docker inspect myvolume                                               [to inspect volume]


docker run -d -p 80:80 --name containername -v volumename:/usr/local/apache2/htdocs/ httpd  [for apache httpd










> COMMANDS TO CREATE & EXECUTE DOCKER NETWORK IN AMAZON LINUX:



docker network create --driver bridge networkname                      [to create docker network]

docker network ls                                                      [to display network]

docker pull amazonlinux                                                [to pull amazon linux]

docker run -dit --name containername amazonlinux:latest                [to run container in amazonlinux]

docker network connect networkname containername                       [to connect the container to the network]

docker network inspect networkname                                     [to inspect networkname]

docker exec -it containername bash                                     [in interactive terminal it makes the container executable]

yum install iputils                                                    [to install ping in linux]

yum install hostname                                                   [to install hostname]

hostname -I                                                            [to display IP address of the container]

ping containername                                                     [pings the container]











> COMMANDS TO CREATE & EXECUTE DOCKER NETWORK IN UBUNTU:



docker network create --driver bridge networkname                      [to create docker network]

docker network ls                                                      [to display network]

docker pull ubuntu:latest                                              [to pull ubuntu]

docker run -dit --name containername ubuntu:latest                     [to run container in ubuntu]

docker network connect networkname containername                       [to connect the container to the network]

docker network inspect networkname                                     [to inspect networkname]

docker exec -it containername bash                                     [in interactive terminal it makes the container executable]

apt-get update                                                         [to get update]

apt install iputils-ping                                               [to install ping in linux]

hostname -I                                                            [to display IP address of the container]

ping containername                                                     [pings the container]










> COMMANDS TO CREATE DOCKER COMPOSE :



sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.7/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version



nano docker-compose.yml

	INSIDE SCRIPT: [2,4,6 spaces]

version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - frontend

  database:
    image: mysql:latest
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db-data:/var/lib/mysql
    networks: 
      - backend

  cache:
    image: redis:latest
    networks:
      - backend

networks:
  frontend:
  backend:
 
volumes:
  db-data:


"HIT CTRL O , ENTER , CTRL X"



ls

cat docker-compose.yml

docker-compose up

CTRL C

docker-compose up -d

docker ps

docker-compose up -d --scale service1=3

docker-compose up -d --scale service1=2

docker-compose down















> COMMANDS TO CREATE DOCKER COMPOSE WITH 5 SERVICES AND UPSCALING 2 SERVICES AT SAME TIME :



sudo curl -L "https://github.com/docker/compose/releases/download/v2.24.7/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version



nano docker-compose.yml

	INSIDE SCRIPT: [2,4,6 spaces]

version: '3.8'

services:
  webnginx:
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - frontend

  mysqldatabase:
    image: mysql:latest
    environment:
      MYSQL_DATABASE: exampledb
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db-data:/var/lib/mysql
    networks:
      - backend

  mariadbdatabase:
    image: mariadb:latest
    environment:
      MARIA_DATABASE: examplemaria
      MARIA_USER: maria
      MARIA_PASSWORD: password
      MARIA_ROOT_PASSWORD: password
    volumes:
      - maria-data:/var/lib/mariadb
    networks:
      - backend

  rediscache:
    image: redis:latest
    networks:
      - backend

  memcache:
    image: memcached:latest
    networks:
     - backend


networks:
  frontend:
  backend:

volumes:
  db-data:
  maria-data:


"HIT CTRL O , ENTER , CTRL X"




ls

cat docker-compose.yml

docker-compose up

CTRL C

docker-compose up -d

docker ps

docker-compose up -d --scale service1=3

docker-compose up -d --scale service1=2

docker-compose up -d --scale service1=3 --scale service2=2

















> COMMANDS FOR NETWORKING DOCKER COMPOSE:



nano docker-compose.yml

		INSIDE SCRIPT: [2,4,6 spaces]

version: '3.8'

services:
  kesav1:
    image: ubuntu:latest
    container_name: kesav1
    networks: 
      - my_bridge_network          (networkname)
    command: tail -f /dev/null

  kesav2:
    image: ubuntu:latest
    container_name: kesav2
    networks:
      - my_bridge_network          (networkname)
    command: tail -f /dev/null

networks:
  my_bridge_network:
    driver: bridge


"HIT CTRL O , ENTER , CTRL X"




docker-compose up -d

docker network ls

docker network inspect networkname












> COMMANDS USED IN CLOUD9 IDE :




mkdir -p src test                        [to create new src & test directory]

cd src                                   [to enter src directory]

touch filename.java                      [to create a new java file] 

cd..                                     [to exit from the directory]

cd test                                  [to enter test directory]

touch filename.java                      [to create a new java file]

cd..                                     [to exit from the directory]



wget https://repo1.maven.org/maven2/junit/junit/4.13.2/junit-4.13.2.jar            [to install Junit]


wget https://repo1.maven.org/maven2/org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar  [to install hamcrest]


java --version                            [to check whether java is installed in IDE or not]


javac -cp .:junit-4.13.2.jar:hamcrest-core-1.3.jar src/Calculator.java test/CalculatorTest.java      

java -cp .:src:test:junit-4.13.2.jar:hamcrest-core-1.3.jar org.junit.runner.JUnitCore CalculatorTest   [to check testcases]








