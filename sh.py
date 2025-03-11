import networkx as nx
import matplotlib.pyplot as plt

# Define tasks and dependencies
tasks = {
    "Planning and Research": [],
    "Setup Environment": ["Planning and Research"],
    "Core Development": ["Setup Environment"],
    "Frontend Development": ["Setup Environment"],
    "Integration": ["Core Development", "Frontend Development"],
    "Testing and Debugging": ["Integration"],
    "Deployment and Documentation": ["Testing and Debugging"],
}

# Create a directed graph
G = nx.DiGraph()

# Add nodes and edges
for task, dependencies in tasks.items():
    G.add_node(task)
    for dependency in dependencies:
        G.add_edge(dependency, task)

# Define node positions for visualization
pos = nx.spring_layout(G)

# Draw the graph
plt.figure(figsize=(12, 8))
nx.draw(
    G, 
    pos, 
    with_labels=True, 
    node_color="skyblue", 
    node_size=3000, 
    font_size=10, 
    font_weight="bold", 
    edge_color="gray"
)

# Title and display
plt.title("PERT Chart for SSH Honeypot Project", fontsize=14)
plt.show()
