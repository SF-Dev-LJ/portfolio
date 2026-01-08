# Portfolio (Salesforce DX)

Lightning Web Components portfolio site for showcasing projects, experience, and a contact form backed by Apex.

Live site: https://sf.5sinfusion.com/portfolio/

## Features

- Projects grid and detail cards (`portfolioProjects`, `portfolioProject`, `portfolioProjectSummary`)
- Experience timeline (`portfolioExperience`)
- Contact form with server-side validation (`portfolioContact` + `PortfolioContactController`)

## Project Structure

- `force-app/main/default/lwc/` — UI components (projects, experience, contact)
- `force-app/main/default/classes/` — Apex controllers and tests
- `config/` — scratch org definition and permission sets

## Prerequisites

- Salesforce CLI installed
- Access to a Dev Hub (for scratch orgs) or target sandbox/dev org

## Quick Start (Scratch Org)

```bash
# Authenticate to your Dev Hub
sfdx auth:web:login -d -a DevHub

# Create and open a scratch org
sfdx force:org:create -s -f config/project-scratch-def.json -a portfolio-scratch

# Push source and assign permissions (if applicable)
sfdx force:source:push

# Run Apex tests
sfdx force:apex:test:run -n PortfolioContactControllerTest -r human -w 20

# Open the app
sfdx force:org:open
```

## Deploy to Sandbox/Dev Org (non-scratch)

```bash
# Authenticate to target org
sfdx auth:web:login --setalias portfolio-target

# Deploy source
sfdx force:source:deploy -p force-app/main/default -u portfolio-target

# Run tests
sfdx force:apex:test:run -n PortfolioContactControllerTest -r human -u portfolio-target -w 20
```
