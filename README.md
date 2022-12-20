# deepchem.io
Website for DeepChem - https://deepchem.io.

## Instructions
### Setting Up
- Install dependencies using `npm i` in the `/deepchem/` directory
- Install python dependencies in file - `utils/requirements.txt` in a virtual env
- Fetch model data from `DeepChem docs`
    ```bash
    cd utils/models
    python get_models.py
    ```
- Fetch tutorials
    ```bash
    cd utils/tutorials
    python fetch_tutorials.py
    python export_tutorials.py
    ```

### Run
- Execute `npm run dev` to start a dev server
- Run `npx next dev -H <hotspot-ip> -p 3000` to test on mobile devices

### Build
- Execute `npm run build`

### Lint
- Execute `npm run `

## Workflow

![](./public/assets/workflow.png)

### TechStack
- [Next-13](https://nextjs.org/blog/next-13)
- [TailwindCSS](https://tailwindcss.com/)

### Features
- Models
- Datasets
- Tutorials

## Links
- [UI/UX](https://www.figma.com/file/lx8RDjCI7XyzLeUMmP7tCw/DeepChem?node-id=0%3A1&t=fen0NhmFRR0TvkX3-3)
