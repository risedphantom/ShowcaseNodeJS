branch := $(shell git rev-parse --abbrev-ref HEAD)
revision := $(shell git rev-parse HEAD)

build:
	docker build -t risedphantom/showcasenodejs:latest --build-arg GIT_BRANCH='$(branch)' --build-arg REVISION='$(revision)' .

publish:
	docker login
	docker push risedphantom/showcasenodejs:latest
