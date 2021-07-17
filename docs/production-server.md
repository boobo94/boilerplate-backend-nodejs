The production server is configured at IP http://188.214.142.137

# Applications

- 188.214.142.137 / gps.maproom.ro / alpha.maproom.ro / gps.agroprecizie.ro - the project is located in `/var/www/vhosts/gps3.web/app/webroot/`
- gpsv1.maproom.ro /  bisomonitoring.com - the project is located in `/var/www/vhosts/gps.web/app/webroot/`
- api.maproom.ro - the project is located in `/var/www/vhosts/gps/web/`
- ionel.maproom.ro - the project is located in `/var/www/vhosts/ionel/`
- aggman.maproom.ro - the project is located in `/var/www/vhosts/masurare/htdocs/app/webroot/`
- dev.fermier.maproom.ro - the project is located in `/var/www/vhosts/sefdeferma-api-enhanced/public`

# Connect to SSH

```sh
ssh root@188.214.142.137
```

# Apache

Apache can be found in `/var/www/apache2/`. 

The configuration file can be found at 

```sh
$ vi /var/www/apache2/sites-enabled/gps.conf 
```

# Databse

## Local Development

### Common errors

1. SELECT list is not in GROUP BY clause and contains nonaggregated column … incompatible with sql_mode=only_full_group_by

Fix: 

```sql
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
```

Source: https://stackoverflow.com/questions/41887460/select-list-is-not-in-group-by-clause-and-contains-nonaggregated-column-inc