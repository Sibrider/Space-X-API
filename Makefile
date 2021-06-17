all: run

run:
	docker-compose up --build

clear:
	docker-compose stop
	docker-compose rm -f

re: clear all
