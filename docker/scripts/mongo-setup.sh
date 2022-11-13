#!/bin/bash

MONGODB_REPLICA_1=mongo_replica_1
MONGODB_REPLICA_2=mongo_replica_2
MONGODB_REPLICA_3=mongo_replica_3

echo "************ [ Waiting for startup ] **************" ${MONGODB_REPLICA_1}

until mongosh --host ${MONGODB_REPLICA_1}:27017 --eval "printjson(db.serverStatus())"; do
  printf '.'
  sleep 1
done

echo "************ [ Startup completed ] **************" ${MONGODB_REPLICA_1}

mongosh --host ${MONGODB_REPLICA_1}:27017 <<EOF
var configuration = {
    "_id": "dbrs",
    "protocolVersion": 1,
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "${MONGODB_REPLICA_1}:27017",
            "priority": 3
        },
        {
            "_id": 2,
            "host": "${MONGODB_REPLICA_2}:27018",
            "priority": 2
        },
        {
            "_id": 3,
            "host": "${MONGODB_REPLICA_3}:27019",
            "priority": 1
        }
    ],
    "settings": {
        "chainingAllowed": true
    }
};
rs.initiate(configuration);
rs.secondaryOk();
db.getMongo().setReadPref('nearest');
EOF 