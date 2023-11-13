#!/bin/bash

export WHITE="$(printf '\033[0;37m')"
export BOLD_WHITE="$(printf '\033[1;37m')"
export BOLD_GREEN="$(printf '\033[1;32m')"
export CHECKMARK="$(printf '\e[1;32m\xE2\x9C\x94\e[0m')"

# Playground path and template #
PLAYGROUND_VUE_DIR=src/playground

PLAYGROUND_VUE_FILE=PlaygroundPage.vue


# Check if Playground.vue file exists before trying to create it #
if [ ! -f "$PLAYGROUND_VUE_DIR/$PLAYGROUND_VUE_FILE" ]; then
	cp "$PLAYGROUND_VUE_DIR/configs/templates/$PLAYGROUND_VUE_FILE" "$PLAYGROUND_VUE_DIR/$PLAYGROUND_VUE_FILE"

	echo ""
	echo "  ${BOLD_GREEN}${CHECKMARK}${BOLD_WHITE} $PLAYGROUND_VUE_FILE file has been created.${WHITE}"
	echo ""
fi

