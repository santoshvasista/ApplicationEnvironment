let JSON_DATA = {
	"applicationInfo":
		[
			{"Id":10000,"Name":"PORTAL"},
			{"Id":10100,"Name":"POLICY"}
		],
	"serverInfo":
		[
			{"Id":30000,"Name":"IOSWEBDEV","Url":null,"IsLoadBalancer":false},
			{"Id":30100,"Name":"IOSWEBDEV2","Url":null,"IsLoadBalancer":false},
			{"Id":30200,"Name":"IOSWEBDVTR","Url":null,"IsLoadBalancer":false},
			{"Id":30300,"Name":"IOSWEBDVTR2","Url":null,"IsLoadBalancer":false},
			{"Id":30400,"Name":"IOS2WEBDVTR","Url":null,"IsLoadBalancer":false},
			{"Id":30500,"Name":"IOS2WEBDVTR2","Url":null,"IsLoadBalancer":false},
			{"Id":30600,"Name":"IOSWEBQA","Url":null,"IsLoadBalancer":false},
			{"Id":30700,"Name":"IOSWEBQA2","Url":null,"IsLoadBalancer":false},
			{"Id":30800,"Name":"IOSWEBTR","Url":null,"IsLoadBalancer":false},
			{"Id":30900,"Name":"IOSWEBTR2","Url":null,"IsLoadBalancer":false},
			{"Id":31000,"Name":"IOSWEB2TR","Url":null,"IsLoadBalancer":false},
			{"Id":31100,"Name":"IOSWEB2TR2","Url":null,"IsLoadBalancer":false},
			{"Id":31200,"Name":"IOSWEB3TR","Url":null,"IsLoadBalancer":false},
			{"Id":31300,"Name":"IOSWEB3TR2","Url":null,"IsLoadBalancer":false},
			{"Id":31400,"Name":"IOSWEBREG","Url":null,"IsLoadBalancer":false},
			{"Id":31500,"Name":"IOSWEBREG2","Url":null,"IsLoadBalancer":false},
			{"Id":31600,"Name":"IOSWEB1","Url":null,"IsLoadBalancer":false},
			{"Id":31700,"Name":"IOSWEB2","Url":null,"IsLoadBalancer":false},
			{"Id":31800,"Name":"IOSWEB3","Url":null,"IsLoadBalancer":false},
			{"Id":31900,"Name":"IOSWEB4","Url":null,"IsLoadBalancer":false},
			{"Id":32000,"Name":"POLICYDVTR","Url":null,"IsLoadBalancer":false},
			{"Id":32100,"Name":"POLICYDVTR2","Url":null,"IsLoadBalancer":false},
			{"Id":32200,"Name":"POLICY2DVTR","Url":null,"IsLoadBalancer":false},
			{"Id":32300,"Name":"POLICY2DVTR2","Url":null,"IsLoadBalancer":false},
			{"Id":32400,"Name":"IOSWEBREG3","Url":null,"IsLoadBalancer":false},
			{"Id":32500,"Name":"POLICYQA","Url":null,"IsLoadBalancer":false},
			{"Id":32600,"Name":"POLICYQA2","Url":null,"IsLoadBalancer":false},
			{"Id":32700,"Name":"POLICYTRNG","Url":null,"IsLoadBalancer":false},
			{"Id":32800,"Name":"POLICYTRNG2","Url":null,"IsLoadBalancer":false},
			{"Id":32900,"Name":"POLICY2TRNG","Url":null,"IsLoadBalancer":false},
			{"Id":33000,"Name":"POLICY2TRNG2","Url":null,"IsLoadBalancer":false},
			{"Id":33100,"Name":"POLICYREG","Url":null,"IsLoadBalancer":false},
			{"Id":33200,"Name":"POLICYPRD","Url":null,"IsLoadBalancer":false},
			{"Id":33300,"Name":"POLICYPRD2","Url":null,"IsLoadBalancer":false},
			{"Id":33400,"Name":"POLICYPRD3","Url":null,"IsLoadBalancer":false}
		],
	"databaseServerInfo":
		[
			{"Id":40000,"Name":"SQLDEV1"},
			{"Id":40100,"Name":"SQLDEVTR1"},
			{"Id":40200,"Name":"SQLDEVTR2"},
			{"Id":40300,"Name":"SQLQA"},
			{"Id":40400,"Name":"SQLTR1"},
			{"Id":40500,"Name":"SQLTR2"},
			{"Id":40600,"Name":"SQLTR3"},
			{"Id":40700,"Name":"SQLREG1"},
			{"Id":40800,"Name":"SQLPRD"},
			{"Id":40900,"Name":"SQLREG"}
		],
	"environmentInfo":
		[
			{"Id":20000,"Name":"DEV"},
			{"Id":20100,"Name":"DEV TRAINING 1"},
			{"Id":20200,"Name":"DEV TRAINING 2"},
			{"Id":20300,"Name":"QA"},
			{"Id":20400,"Name":"TRAINING 1"},
			{"Id":20500,"Name":"TRAINING 2"},
			{"Id":20600,"Name":"TRAINING 3"},
			{"Id":20700,"Name":"REGRESSION"},
			{"Id":20800,"Name":"PRODUCTION"}
		],
	"databaseInfo":
		[
			{"Id":50000,"Name":"IOSDB"},
			{"Id":50100,"Name":"POLICYDB"},
		],
	"databaseUserInfo":
		[
			{"Id":60000,"UserId":"PORTAL","Password":"Portal_123"},
			{"Id":60100,"UserId":"POLICY","Password":"Policy_456"},
		],
	"appEnvInfoDetails":
		[
            {"AppId":10000,"EnvId":20000,"DatabaseServerId":40000,"ServerIds":[30000,30100],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20100,"DatabaseServerId":40100,"ServerIds":[30200,30300],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20200,"DatabaseServerId":40200,"ServerIds":[30400,30500],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20300,"DatabaseServerId":40300,"ServerIds":[30600,30700],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20400,"DatabaseServerId":40400,"ServerIds":[30800,30900],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20500,"DatabaseServerId":40500,"ServerIds":[31000,31100],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20600,"DatabaseServerId":40600,"ServerIds":[31200,31300],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20700,"DatabaseServerId":40900,"ServerIds":[31400,31500,32400],"DatabaseIds":[50000]},
			{"AppId":10000,"EnvId":20800,"DatabaseServerId":40800,"ServerIds":[31600,31700,31800,31900],"DatabaseIds":[50000]},
			{"AppId":10100,"EnvId":20000,"DatabaseServerId":null,"ServerIds":[],"DatabaseIds":[]},
			{"AppId":10100,"EnvId":20100,"DatabaseServerId":40100,"ServerIds":[32000,32100],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20200,"DatabaseServerId":40200,"ServerIds":[32200,32300],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20300,"DatabaseServerId":40300,"ServerIds":[32500,32600],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20400,"DatabaseServerId":40400,"ServerIds":[32700,32800],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20500,"DatabaseServerId":40500,"ServerIds":[32900,33000],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20700,"DatabaseServerId":40700,"ServerIds":[33100],"DatabaseIds":[50100]},
			{"AppId":10100,"EnvId":20800,"DatabaseServerId":40800,"ServerIds":[33200,33300,33400],"DatabaseIds":[50100]},
		],
	"databaseUserInfoDetail":
		[
			{"databaseId":50000,"UserIds":[60000]},
			{"databaseId":50100,"UserIds":[60100]}
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50000,"UserIds":[60000]},
			// {"databaseId":50100,"UserIds":[60100]},
			// {"databaseId":50100,"UserIds":[60100]}
		]
}

export default JSON_DATA;