import os

def iterate_files(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file_name in files:
            if file_name.endswith(".py"):  # Filter only Python files
                file_path = os.path.join(root, file_name)
                # Add your code to debug the file or perform other actions
                print(f"Debugging {file_path}...")
                # Example: Run the file using the Python interpreter
                os.system(f"python {file_path}")

# Specify the folder path containing the files you want to debug
folder_path = "/path/to/your/folder"

# Call the iterate_files function with the folder path
iterate_files(folder_path)



import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)
```

You can then add logging statements using `logging.debug()`, `logging.info()`, `logging.warning()`, or other appropriate log levels at the desired locations in your code.

```python
logging.debug("This is a debug log message")
logging.info("This is an info log message")
logging.warning("This is a warning log message")



