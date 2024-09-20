export default defineEventHandler(async () => {
  const { datasource } = useRuntimeConfig()
  if (datasource === 'remote')
    return $fetch('https://explorer-data.web3privacy.info/')
  return await useStorage('assets:server').getItem('data.json')
})
