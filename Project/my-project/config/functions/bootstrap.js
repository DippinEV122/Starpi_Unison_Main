module.exports = () => {
  registerPermissionActions();
};
const registerPermissionActions = () => {
    const actions = 
      {
        section: 'plugins',
        displayName: 'Write',
        uid: 'write',
        pluginName: 'data-import-export',
      };
  
    const { actionProvider } = strapi.admin.services.permission;
    actionProvider.register(actions);
}
