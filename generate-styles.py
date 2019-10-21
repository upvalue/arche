# generate colors

variables = {}
colors = {
    "dark-gray": ("182026", "202b33", "293742", "30404d", "394b59"),
    "gray": ("5c7080", "738694", "8a9ba8", "a7b6c2", "bfccd6"),
    "light-gray": ("ced9e0", "d8e1e8", "e1e8ed", "ebf1f5", "f5f8fa"),
    "primary": ("0e5aba", "106ba3", "137cbd", "2b95d6", "48aff0"),
    "danger": ("a82a2a", "c23030", "db3737", "f55656", "ff7373"),
    "warning": ("ffb366", "f29d49", "d9822b", "bf7326", "a66321"),
    "secondary": ("0a6640", "0d8050", "0f9960", "15b371", "3dcc91"),
}

for k in colors:
    for i in range(len(colors[k])):
        rgb = colors[k][i]
        name = f"{k}-{i+1}"
        var = f"--a-{name}"
        variables[var] = f"#{rgb}"
        print(f".a-color-{name}", "{ color: var(", var, ")}")
        print(f".a-bg-{name}", "{ background-color: var(", var, ")}")

# generate spacing
spacing = ("0", "4", "8", "16", "32", "64")

types = {"p": "padding", "m": "margin"}
directions = {
    "l": ("left",),
    "t": ("top",),
    "b": ("bottom",),
    "r": ("right",),
    "x": ("left", "right"),
    "y": ("top", "bottom"),
}

for i, s in enumerate(spacing):
    variables[f"--a-space-{i}"] = f"{s}px"
    for t in types:
        print(f".a-{t}{i} {{ {types[t]}: var(--a-space-{i}); }} ")
        for d in directions:
            print(
                f".a-{t}{d}{i} {{ "
            )  # {types[t]}-{directions[d]}: var(--a-space-{i}); }}")
            for d2 in directions[d]:
                print(f"\t{types[t]}-{d2}: var(--a-space-{i});")
            print(f"}}")

# generate button styles

intents = ("primary", "secondary", "warning", "danger")
for intent in intents:
    print(
        f""".button.{intent} {{
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
    background-color: var(--a-{intent}-3);
    color: white;
}}
.button.{intent}:hover {{
    background-color: var(--a-{intent}-2);
}}
.button.{intent}:active {{
    background-color: var(--a-{intent}-1);
}}
        """
    )

print(":root {")
for k in variables:
    print(f"\t{k}: {variables[k]};")
print("}")

