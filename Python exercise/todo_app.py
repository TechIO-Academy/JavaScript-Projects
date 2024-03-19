def main_menu():
    print("Welcome to the To-Do App!")
    print("1. Add a task")
    print("2. View tasks")
    print("3. Delete a task")
    print("4. Exit")

tasks = []


def view_tasks():
    print("Tasks:")
    for index, task in enumerate(tasks, 1):
        print(f"{index}. {task}")
def add_task():
    task = input("Enter the task: ")
    tasks.append(task)
    print("Task added successfully!")

def delete_task():
    view_tasks()
    index = int(input("Enter the task number to delete: ")) - 1
    if 0 <= index < len(tasks):
        del tasks[index]
        print("Task deleted successfully!")
    else:
        print("Invalid task number.")

def main():
    while True:
        main_menu()
        choice = input("Enter your choice: ")
        if choice == "1":
            add_task()
        elif choice == "2":
            view_tasks()
        elif choice == "3":
            delete_task()
        elif choice == "4":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
