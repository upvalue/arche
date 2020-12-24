#!/bin/bash
# watch.sh - watch updates to arche and copy to a directory
ARG=$1
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
set -x
ls ${DIR}/arche.tsx ${DIR}/arche.css | entr -s "cp ${DIR}/arche.tsx ${DIR}/arche.css ${ARG}"
