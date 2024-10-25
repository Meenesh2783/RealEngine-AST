Objective:
Develop a simple 3-tier rule engine application(Simple UI, API and Backend, Data) to determine
user eligibility based on attributes like age, department, income, spend etc.The system can use
Abstract Syntax Tree (AST) to represent conditional rules and allow for dynamic
creation,combination, and modification of these rules.

Data Structure:

● Define a data structure to represent the AST.
● The data structure should allow rule changes
● E,g One data structure could be Node with following fields
○ type: String indicating the node type ("operator" for AND/OR, "operand" for
conditions)
○ left: Reference to another Node (left child)
○ right: Reference to another Node (right child for operators)
○ value: Optional value for operand nodes (e.g., number for comparisons)

Data Storage:

● Define the choice of database for storing the above rules and application metadata
● Define the schema with samples.

Sample Rules:

● rule1 = "((age > 30 AND department = 'Sales') OR (age < 25 AND
department = 'Marketing')) AND (salary > 50000 OR experience >
5)"
● rule2 = "((age > 30 AND department = 'Marketing')) AND (salary >
20000 OR experience > 5)"

API Design:

1. create_rule(rule_string): This function takes a string representing a rule (as
shown in the examples) and returns a Node object representing the corresponding AST.

2. combine_rules(rules): This function takes a list of rule strings and combines them
into a single AST. It should consider efficiency and minimize redundant checks. You can
explore different strategies (e.g., most frequent operator heuristic). The function should
return the root node of the combined AST.

4. evaluate_rule(JSON data): This function takes a JSON representing the combined
rule's AST and a dictionary data containing attributes (e.g., data = {"age": 35,
"department": "Sales", "salary": 60000, "experience": 3}). The
function should evaluate the rule against the provided data and return True if the user is
of that cohort based on the rule, False otherwise.

dependencies:

Frontend Dependencies

1. react


2. react-dom


3. axios


4. react-router-dom (optional, if routing is needed)


5. styled-components (optional, for styled components)

Backend Dependencies

1. express


2. mongoose (if using MongoDB)


3. cors


4. body-parser (optional, Express includes it natively)


5. dotenv

Backend Dev Dependencies

1. nodemon (for automatic restarts during development)


You can install all the dependencies by running:

Frontend:

npm install react react-dom axios react-router-dom styled-components

Backend:

npm install express mongoose cors body-parser dotenv
npm install --save-dev nodemon

This list covers the essentials for your Rule Engine project. Let me know if you need additional suggestions!
