package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"github.com/brianvoe/gofakeit/v5"
)

const pathToRoot = "../../"

type Miner struct {
	Id                string `json:"id" fake:"{bitcoinaddress}"`
	Region            string `json:"region" fake:"{randomstring:[Europe,Africa,Asia,North America,Oceania,South America,Global]}"`
	Name              string `json:"name" fake:"{company}"`
	Location          string `json:"location" fake:"{country}"`
	Entity            LegalEntity `json:"legalEntity"`
	CapacityTB        uint   `json:"capacityTB" fake:"{number:1,1000000}"`
	DatasetCategories string `json:"datasetCategories" fake:"{randomstring:[cancer data,global warming,traffic,satelite,dna,COVID,academic,health]}"`
}

type LegalEntity struct {
	Name string `json:"name" fake:"{company}"`
	VAT  string `json:"VAT" fake:"{bs}"`
	GDPR bool   `json:"GDPR" fake:"{bool}"`
}

func fakeMiners(num uint) []Miner {
	miners := make([]Miner, num)

	gofakeit.Seed(0)
	for i := range miners {
		gofakeit.Struct(&miners[i])
	}

	return miners
}

func writeFiles(miners []Miner) {
	newpath := filepath.Join(pathToRoot, "profiles")
	err := os.MkdirAll(newpath, os.ModePerm)
	if err != nil {
		panic(err)
	}

	for _, miner := range miners {
		data, err := json.Marshal(miner)
		if err != nil {
			panic(err)
		}
		filename := fmt.Sprintf("%s.json", miner.Id)
		ioutil.WriteFile(filepath.Join(pathToRoot, "public/profiles", filename), data, 0644)
	}
}

func main() {
	miners := fakeMiners(100)
	writeFiles(miners)
}
