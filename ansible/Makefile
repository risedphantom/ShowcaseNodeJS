install:
	ansible-galaxy install -r requirements.yaml

deploy:
	ansible-playbook deploy_all.yaml -i inventory.ini

install-vpn:
	ansible-playbook deploy_all.yaml -i inventory.ini -t vpn
