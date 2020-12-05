.PHONY : typechain compile test compile-clean console run prettier integration

typechain:
	./node_modules/.bin/typechain --target ethers-v5 --outDir typechain './artifacts/*.json'

compile:
	npx hardhat compile
	cp -R artifacts/** app/src/build
	make typechain

compile-clean:
	npx hardhat clean
	rm -r ./typechain/*
	make compile

test:
	npm run-script test test/FundManagerTest.ts

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
