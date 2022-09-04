# How to deploy

Go to ansible dir
```
cd ansible
```

Install dependencies with
```
make
```

and then simply run
```
make deploy
```

Ansible will install portfolio site as systemd service, certbot for certificate renewal, and Wireguard VPN service. Remote server ip is in `inventory.ini`.
