import 'package:algonacci/themes.dart';
import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: navyColor,
      body: ListView(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: defaultMargin,
            ),
            child: Column(
              children: [
                const SizedBox(
                  height: 80,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(250),
                      child: Image.asset(
                        'assets/pp.jpg',
                        width: 250,
                      ),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 20,
                ),
                Card(
                  color: greyColor,
                  child: Padding(
                    padding: const EdgeInsets.all(24),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          "Hello I'm Eric!",
                          style: whiteTextStyle.copyWith(
                            fontWeight: bold,
                            fontSize: 40,
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Text(
                          "Hello, I'm Eric Julianto. Currently studying Hospitality and Tourism (third-year) at Universitas Bunda Mulia Ancol.\nI extremely motivated to constantly develop my skills and grow.",
                          style: whiteTextStyle.copyWith(
                            fontSize: 20,
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Text(
                          "Currently I'm studying about technologies such as web development, cross-platform development, artificial intelligence, internet of things, and many more. I dedicated this blog to put all my projects I've done and some writing that comes from my mind randomly.",
                          style: whiteTextStyle.copyWith(
                            fontSize: 20,
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Text(
                          "If you have any question about my project or even about me, don't hesitate to ask me. You can contact me through my LinkedIn. Thank you 🙏",
                          style: whiteTextStyle.copyWith(
                            fontSize: 20,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
                Text(
                  'Made with ❤️ by Eric Julianto',
                  style: whiteTextStyle,
                ),
                const SizedBox(
                  height: 20,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
