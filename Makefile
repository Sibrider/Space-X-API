all: run

run:
	docker-compose up --build

clear: stop
	docker-compose rm -f

stop:
	docker-compose stop

re: clear all
