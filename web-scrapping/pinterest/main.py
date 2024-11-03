import subprocess

# List of Python files to run
files_to_run = ['2.py', '3.py', '4.py']

for file in files_to_run:
    print(f"Running {file}...")
    subprocess.run(['python', file], check=True)
    print(f"{file} finished.\n")
