FROM openjdk:11-jre-slim
WORKDIR /app
COPY target/backend-1.0-SNAPSHOT.jar backend-1.0-SNAPSHOT.jar
EXPOSE 9292
CMD [ "java", "-jar", "backend-1.0-SNAPSHOT.jar" ]
