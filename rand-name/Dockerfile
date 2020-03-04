FROM openfaas/of-watchdog:0.7.6 as watchdog

FROM clojure:openjdk-14-lein-2.9.1-alpine as preparebuild
WORKDIR /root/
COPY project.clj project.clj
RUN lein deps


FROM clojure:openjdk-14-lein-2.9.1-alpine as builder
WORKDIR /root/
COPY --from=preparebuild /root/.m2 /root/.m2
COPY src src
COPY project.clj project.clj
RUN lein uberjar && mv target/function.jar .
RUN apk add bash

FROM openjdk:14-alpine
WORKDIR /root/
RUN mkdir -p /home/app
COPY --from=builder /root/function.jar /root/
COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog
RUN apk add bash
ENV read_timeout="1800"
ENV write_timeout="1800"
ENV upstream_url="http://127.0.0.1:4000"
ENV mode="http"
ENV fprocess="java -jar function.jar"
ENV write_debug="true"
EXPOSE 8080
HEALTHCHECK --interval=5s CMD [ -e /tmp/.lock ] || exit 1
CMD ["fwatchdog"]
