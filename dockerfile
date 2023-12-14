


FROM nginx:alpine

COPY ./usr/share/nginx/html


EXPOSE 80


FROM python:3.8-slim

WORKDIR . /app

RUN pip install requirements.txt

EXPOSE 5000

ENV FLASK_ENV=production

CMD []