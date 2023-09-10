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
