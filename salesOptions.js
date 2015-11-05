[
        {
            id: 1,
            businessModel: BusinessModels.Free,
            name: 'Full Banner (468x60 pixels)',
            description: 'Earn money on your website by selling banner space.',
            userIncomePerHour: 0.0316,
            usersLostPerHour: function($rootScope) {
                factor = 0.005;
                return $rootScope.settings.users * factor;
            }
            
        },   
        {
            id: 2,
            businessModel: BusinessModels.Free,
            name: 'Sidebar Banner (100x600 pixels)',
            description: 'Earn money by selling a 200x600 pixels banner space on your website.',
            userIncomePerHour: 0.0116,
            usersLostPerHour: function($rootScope) {
                factor = 0.003;
                return $rootScope.settings.users * factor;
            }
        },
        {
            id: 3,  
            businessModel: BusinessModels.Paid,
            name: 'Basic $10 Subscription',
            description: 'Earn money by requiring your users to pay a monthly subscription fee for $10.00.',
            userIncomePerHour: 0.0416,
            usersLostPerHour: function($rootScope) {
                var monthlyPrice = 10;
                factor = 0.009;
                var optimalPrice = $rootScope.projectOverviewData.total * factor;
                
                var difference = optimalPrice - monthlyPrice;
                if(difference < 0) {
                    difference = difference / 2;
                } else {
                    difference = 0;
                }
                
                return Math.abs(difference);
            }
        }
    ]
