/**
 * 全局导航控制类
 */
export default class NavigationUtil {
	/**
	* 跳转到指定页面
	* @param params 要传递的参数
	* @param page 要跳转的页面
	*/
   static goPage(params,page){
	   const navigation = NavigationUtil.navigation;
	   if(!navigation){
		   console.log('navigation can not be null');
		   return;
	   }
	   navigation.navigate(
		   page,
		   {
			   ...params
		   }
	   );

   }

	/**
	* 返回上一页
	* @param navigation
	*/
   static goBack(navigation) {
	   navigation.goBack();
   }

   /**
	* 重置回首页
	* @param navigation
	*/
	static resetToHomePage(params) {
		const {navigation} = params;
		navigation.navigate("Main");
	}

  

}
