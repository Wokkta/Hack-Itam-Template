run-database:
	# how????

run-backend:	
	cd src && python3.10 -m uvicorn -host=0.0.0.0 entrypoints:app
	#port 8000 / 8080
	
run-frontend:
	npm run dev
	#port 80

install:
	python3.10 -m pip install -r requirements.txt
	npm install
	npm install axious
