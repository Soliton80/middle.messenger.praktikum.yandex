fatal() {
    echo "$*"
    exit 1
}

kill_descendant_processes() {
    local pid="$1"
    local and_self="${2:-false}"
    if children="$(pgrep -P "$pid")"; then
        for child in $children; do
            kill_descendant_processes "$child" true
        done
    fi
    if [[ "$and_self" == true ]]; then
        kill "$pid"
    fi
}

start_node() {
    npm run start 2>&1 >/dev/null & # Can't run `npm run start` 
    echo "$!" > "${BATS_RUN_TMPDIR}/node.pid"
    timeout 60 bash "${BATS_TEST_DIRNAME}/utils/wait_for_port_3000.bash" # Wait for server on port 3000
}

shutdown_node() {
    touch "${BATS_RUN_TMPDIR}/node.pid"
    PID="$(< "${BATS_RUN_TMPDIR}/node.pid")"
    [ "${PID}" == "" ] || kill_descendant_processes "${PID}" true || true
}
