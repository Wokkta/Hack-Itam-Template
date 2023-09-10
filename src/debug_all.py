import os
import pdb


def debug_files_in_folder(folder_path):
       for file_name in os.listdir(folder_path):
           if file_name.endswith(".py"):
               file_path = os.path.join(folder_path, file_name)
               print(f"Debugging {file_path}...")
               pdb.run('exec(open(file_path).read())', globals(), locals())


debug_files_in_folder("/home/su_mrak/Hack-Itam-Template/src")
