# Testing Notes

Quick testing checklist and notes for the Profile Card implementation.

## Requirements Checklist

| Requirement                                 | Status |
| ------------------------------------------- | ------ |
| All `data-testid` attributes present        | ✅     |
| Semantic HTML (article, nav, section, etc.) | ✅     |
| Time displays in milliseconds               | ✅     |
| Avatar with alt text                        | ✅     |
| Social links open in new tab                | ✅     |
| Responsive layout (mobile + desktop)        | ✅     |
| Keyboard accessible                         | ✅     |

## Manual Testing

**Functionality:**

- [ ] Time updates every second
- [ ] All social links work and open in new tabs
- [ ] Avatar image loads properly

**Responsive Design:**

- [ ] Mobile (< 768px): Stacked vertical layout
- [ ] Desktop (≥ 768px): Side-by-side layout
- [ ] No horizontal scroll at any width

**Accessibility:**

- [ ] Tab key navigates through all links
- [ ] Focus indicators are visible
- [ ] Screen readers can access all content

## Test IDs Reference

```javascript
document.querySelector('[data-testid="test-profile-card"]');
document.querySelector('[data-testid="test-user-name"]');
document.querySelector('[data-testid="test-user-bio"]');
document.querySelector('[data-testid="test-user-time"]');
document.querySelector('[data-testid="test-user-avatar"]');
document.querySelector('[data-testid="test-user-social-links"]');
document.querySelector('[data-testid="test-user-hobbies"]');
document.querySelector('[data-testid="test-user-dislikes"]');
```

## Browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

**Status:** All requirements met ✅
