package main

import (
	"log"

	"github.com/pocketbase/pocketbase"
)

func main() {
	// Initialise a new PocketBase app instance.
	app := pocketbase.New()

	// Start the PocketBase app server, and handle any errors.
	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
