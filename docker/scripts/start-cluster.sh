#!/bin/bash

RED='\033[0;31m'

docker-compose -f ./docker-compose.dev.yaml up -d

if [ $? = 1 ]; then
    echo -e "\n${RED}Failed to start Docker services"

    exit 1
fi

if [ ! -d "./node_modules" ]; then
    echo -e "${RED}Must run 'pnpm i'"

    exit 1
fi

node ./docker/scripts/open-dashboard.cjs
