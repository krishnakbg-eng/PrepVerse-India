# Contributing to PrepVerse India

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Request Process

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints
5. Issue that pull request!

## Coding Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write descriptive commit messages
- Add comments for complex logic

## Branch Naming Convention

- `feature/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/doc-name` - Documentation
- `refactor/refactor-name` - Code refactoring

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

Example:
```
feat(jee): add advanced physics problems

Added 50 new physics problems for advanced JEE learners

Closes #123
```

## Code Style

### TypeScript
```typescript
// ✓ Good
interface StudentData {
  id: string
  name: string
  email: string
}

const getStudent = async (id: string): Promise<StudentData> => {
  // implementation
}

// ✗ Bad
const getStudent = async (id) => {
  // implementation
}
```

### React Components
```typescript
// ✓ Good
'use client'

import { FC } from 'react'

interface ComponentProps {
  title: string
  onClick: () => void
}

const MyComponent: FC<ComponentProps> = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>
}

export default MyComponent

// ✗ Bad
const MyComponent = (props) => {
  return <button onClick={props.onClick}>{props.title}</button>
}
```

## Testing

Write tests for new features:
```bash
npm test
```

## Documentation

- Update README.md for new features
- Add JSDoc comments to functions
- Document API changes
- Update DEVELOPER_GUIDE.md if needed

## Report Bugs

Use GitHub Issues with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment info

## Suggest Features

Use GitHub Discussions:
- Describe the feature
- Explain use case
- Provide examples
- Link related issues

## Community

- Be respectful
- Follow code of conduct
- Help other contributors
- Share knowledge

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to PrepVerse India! 🎓
