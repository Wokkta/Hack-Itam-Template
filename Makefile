run:
	cd src && python3.10 -m uvicorn entrypoints:app

install:
	python3.10 -m pip install -r requirements.txt
