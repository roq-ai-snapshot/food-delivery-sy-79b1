interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Delivery Driver'],
  tenantName: 'Restaurant',
  applicationName: 'Food Delivery System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Create orders', 'Read menus', 'Read order status'],
  ownerAbilities: ['Manage users', 'Manage restaurants', 'Manage orders', 'Manage menus'],
  getQuoteUrl: 'https://app.roq.ai/proposal/1b37c349-bc24-4662-9615-18656836bf2d',
};
