# Promtail setup steps
:::note
Based on https://sbcode.net/grafana/install-promtail-service/
:::
# Steps

Configure all lotus services to emit logs to appropriate location!
```bash
Environment=GOLOG_FILE="/var/log/lotus/<service_name>.log"
Environment=GOLOG_LOG_FMT="json"
```

### 1. Download, unzip and mod permisions of promtail. 
```bash
cd /usr/local/bin
sudo curl -fSL -o promtail.gz "https://github.com/grafana/loki/releases/download/v1.6.1/promtail-linux-amd64.zip"
sudo gunzip promtail.gz
sudo chmod a+x promtail
```

### 2. Add Promtail config
```YAML
# /usr/local/bin/config-promtail.yml

server:
  http_listen_address: 0.0.0.0
  http_listen_port: 9080

positions:
  filename: /tmp/positions.yaml

clients:
  - url: http://addserver:3100/loki/api/v1/push

scrape_configs:

- job_name: lotus
  static_configs:
  - targets:
      - localhost
    labels:
      job: lotuslogs
      __path__: /var/log/lotus/*log
```
:::note
Change addserver with deployed loki infrastructure server
:::

### 3. Register promtail as a service, while also adding promtail user (not necessary, just cleaner)
```systemd
# /etc/systemd/system/promtail.service

[Unit]
Description=Promtail service
After=network.target

[Service]
Type=simple
User=promtail
ExecStart=/usr/local/bin/promtail -config.file /usr/local/bin/config-promtail.yml

[Install]
WantedBy=multi-user.target
```

### 4. Don't forget to change permisions
```bash
sudo chown promtail:promtail /tmp/positions.yaml
```

### 5. Don't forget to enable service globaly.
```bash
sudo systemctl enable promtail.service
```

