export function createCommitteeObject(name = 'Testkom', key, icon = 'MockIcon', info = 'Default info') {
  return {
    name,
    icon,
    info,
    key: key || name.toLowerCase(),
  };
}
