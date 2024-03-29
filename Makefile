.PHONY : typechain compile test compile-clean console run prettier integration

typechain:
	npx hardhat typechain

compile:
	npx hardhat compile
	make typechain

compile-clean:
	npx hardhat clean
	rm -r ./typechain/*
	make compile

test:
	npm run-script test test/training/TrainingTest.ts

run-node:
	@npx hardhat node

prettier:
	prettier --write **/*.sol
	prettier --write "{**/*,*}.{js,ts,jsx,tsx}"

commit:
	git add .
	git commit -m "quick commit"
	git push

e2e:
	npx hardhat run integration/EndToEndStream.ts

maker:
	npx hardhat --network localhost run integration/makerIntegration.ts

balance:
	npx hardhat --network localhost run integration/helpers/GiveBalance.ts

time:
	npx hardhat --network localhost run integration/helpers/SkipTime.ts

coverage:
	npx hardhat coverage
